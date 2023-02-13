import { inter } from './fonts';
import { getInfo } from '@/lib/info';
import { Profile } from '@/components/profile';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { PrettyLink } from '@/components/ui/pretty-link';
import { PrettyText } from '@/components/ui/pretty-text';

export default function Home() {
  const info = getInfo();

  return (
    <main
      className={`${inter.className} container mx-auto flex flex-col gap-6 px-8 py-8 pb-12 sm:gap-16 sm:py-16`}
    >
      <h1>
        <PrettyText className="text-center text-8xl">Jordan Stout</PrettyText>
      </h1>
      <Profile />
      <Skills data={info.skills} />
      <PrettyLink href="https://github.com/j" target="_blank">
        github.com/j
      </PrettyLink>
      <Experience data={info.experience} />
      <PrettyLink href="mailto:j@jrdn.org">j@jrdn.org</PrettyLink>
    </main>
  );
}
