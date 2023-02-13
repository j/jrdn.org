import { Section } from '@/components/ui/section';

export interface SkillsProps {
  data: import('@/lib/info').Skills[];
}

export function Skills({ data }: SkillsProps) {
  return (
    <Section headline="Skills">
      {data.map(({ items }) =>
        items.map((item) => (
          <span
            key={item}
            className="mr-2 mb-2 box-border inline-block rounded-xl border py-1 px-2 text-xs"
          >
            {item}
          </span>
        ))
      )}
    </Section>
  );
}
