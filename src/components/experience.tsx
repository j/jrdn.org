import { Section } from '@/components/ui/section';
import { type ExperienceItem } from '@/lib/info';

export interface ExperienceProps {
  data: ExperienceItem[];
}

export function Experience({ data }: { data: ExperienceItem[] }) {
  return (
    <Section headline="Experience">
      {data.map((item) => (
        <div key={item.company} className="mt-16 first:mt-0">
          <div className="flex flex-wrap items-center justify-between">
            <h3 className="blue-gray-500 text-xl">
              {item.position} @ {item.company}
            </h3>
            <p className="text-sm">
              {item.startYear} - {item.endYear ?? 'Present'}
            </p>
          </div>
          <p className="mt-3 text-sm text-slate-500">{item.location}</p>
          <ul className="mt-3">
            {item.highlights.map((item) => (
              <li key={item} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
