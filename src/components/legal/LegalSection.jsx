function LegalTable({ table }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-sage-100 dark:border-night-800">
      <table className="w-full border-collapse text-left text-xs">
        <thead className="bg-sage-50 text-ink-700 dark:bg-night-900 dark:text-mist-300">
          <tr>
            {table.headers.map((header) => (
              <th key={header} className="px-3 py-2 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-sage-100 dark:border-night-800">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-3 py-2 align-top text-ink-600 dark:text-mist-400">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LegalSection({
  heading,
  paragraphs,
  list,
  table,
  paragraphs2,
  subsections,
  level = 2,
}) {
  const Heading = level === 2 ? 'h2' : 'h3';

  return (
    <section className={level === 2 ? 'mt-10' : 'mt-6'}>
      <Heading
        className={
          level === 2
            ? 'text-lg font-bold text-ink-800 break-keep dark:text-cream-50'
            : 'text-base font-bold text-ink-800 break-keep dark:text-cream-50'
        }
      >
        {heading}
      </Heading>
      {paragraphs?.map((paragraph, index) => (
        <p key={index} className="mt-3 text-sm leading-relaxed text-ink-600 break-keep dark:text-mist-400">
          {paragraph}
        </p>
      ))}
      {list && (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-600 break-keep dark:text-mist-400">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {table && <LegalTable table={table} />}
      {paragraphs2?.map((paragraph, index) => (
        <p key={index} className="mt-3 text-sm leading-relaxed text-ink-600 break-keep dark:text-mist-400">
          {paragraph}
        </p>
      ))}
      {subsections?.map((subsection, index) => (
        <LegalSection key={index} {...subsection} level={3} />
      ))}
    </section>
  );
}
