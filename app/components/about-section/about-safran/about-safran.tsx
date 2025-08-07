import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { getLocaleDict } from '@/app/i18n-service';

export default async function AboutSafran() {
  const { dict } = await getLocaleDict();
  const aboutText = dict.about_section.about_text;

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-16">
      <Card>
        <CardBody>
          {aboutText.intro.map((paragraph: string, i: number) => (
            <p key={i} className="text-lg leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
              {paragraph}
            </p>
          ))}
        </CardBody>
      </Card>

      {[1, 2, 3, 4, 5].map(n => {
        const section = aboutText[`section${n}`];
        return (
          <Card key={n} className="mt-8">
            <CardBody>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400 dark:text-blue-300">{section.title}</h3>
              {section.paragraph1 && (
                <p className="text-lg leading-relaxed mb-5 text-gray-700 dark:text-gray-300">{section.paragraph1}</p>
              )}
              {Array.isArray(section.paragraphs) &&
                section.paragraphs.map((p: string, i: number) => (
                  <p key={i} className="text-lg leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
                    {p}
                  </p>
                ))}

              {Array.isArray(section.list) && (
                <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
                  {section.list.map((item: string, i: number) => (
                    <li key={i} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.paragraph2 && (
                <p className="text-lg leading-relaxed mb-5 text-gray-700 dark:text-gray-300">{section.paragraph2}</p>
              )}
            </CardBody>
          </Card>
        );
      })}
      <Card className="mt-8">
        <CardBody>
          <h3 className="text-2xl font-semibold mb-4 text-blue-400 dark:text-blue-300">{aboutText.conclusion.title}</h3>
          {aboutText.conclusion.paragraphs.map((p: string, i: number) => (
            <p key={i} className="text-lg leading-relaxed mb-5 text-gray-700 dark:text-gray-300">
              {p}
            </p>
          ))}
        </CardBody>
      </Card>
      <Card className="mt-8 mb-10">
        <CardBody>
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{aboutText.disclaimer}</p>
        </CardBody>
      </Card>
    </section>
  );
}
