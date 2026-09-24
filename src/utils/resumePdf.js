import { experience, profile, projects, skillCategories } from '../data/portfolioData.js';

function escapePdfText(value) {
  return String(value)
    .replace(/[^\x20-\x7E]/g, '?')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function wrapText(value, maxLength = 92) {
  const words = String(value).split(/\s+/);
  const lines = [];
  let line = '';

  words.forEach((word) => {
    if (`${line} ${word}`.trim().length > maxLength) {
      if (line) lines.push(line);
      line = word;
    } else {
      line = `${line} ${word}`.trim();
    }
  });

  if (line) lines.push(line);
  return lines;
}

function buildResumeLines() {
  const lines = [
    profile.name,
    profile.headline,
    `${profile.email}  |  ${profile.phone}  |  ${profile.location}`,
    '',
    'PROFILE',
    'Computer Science graduate and Full Stack Developer building responsive web applications, REST APIs, database workflows, automated tests, and CI/CD-supported delivery.',
    '',
    'EXPERIENCE',
  ];

  experience.forEach((item) => {
    lines.push(`${item.role} | ${item.company} | ${item.duration}`);
    wrapText(item.description, 92).forEach((line) => lines.push(line));
    item.highlights.slice(0, 4).forEach((highlight) => wrapText(`- ${highlight}`, 92).forEach((line) => lines.push(line)));
    lines.push('');
  });

  lines.push('SKILLS');
  skillCategories.forEach((category) => lines.push(`${category.title}: ${category.skills.join(', ')}`));
  lines.push('', 'SELECTED PROJECTS');
  projects.slice(0, 4).forEach((project) => {
    lines.push(`${project.name} | ${project.stack.join(', ')}`);
    wrapText(project.description, 92).forEach((line) => lines.push(line));
    lines.push('');
  });

  return lines;
}

export function downloadResumePdf() {
  const lines = buildResumeLines();
  const commands = ['BT', '/F1 10 Tf', '48 750 Td', '12 TL'];

  lines.slice(0, 54).forEach((line, index) => {
    if (index === 0) commands.push('/F1 17 Tf');
    if (index === 1) commands.push('/F1 11 Tf');
    if (index === 3 || line === 'PROFILE' || line === 'EXPERIENCE' || line === 'SKILLS' || line === 'SELECTED PROJECTS') {
      commands.push('/F1 10 Tf');
    }
    commands.push(`(${escapePdfText(line)}) Tj T*`);
  });
  commands.push('ET');

  const stream = commands.join('\n');
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  const blob = new Blob([pdf], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${profile.name.replace(/\s+/g, '-')}-Resume.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}