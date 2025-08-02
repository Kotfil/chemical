'use client';
import React, { FC, Suspense, useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
  useDisclosure,
} from '@heroui/react';
import { Flag } from './localization.styles';
import { PlanetIcon } from '@/components/icons';
import { useTranslation } from 'next-i18next';
import { languagesListMock } from '@/mock/languages-list.mock';

export const Localization: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [mounted, setMounted] = useState(false);
  const { i18n } = useTranslation();
  const normalizeLocale = (locale: string) => locale.split('-')[0];
  const currentLocale = normalizeLocale(i18n.language || 'en');
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleLanguageChange = async (locale: string) => {
    try {
      await i18n.changeLanguage(locale);
    } catch (e) {
      console.error('Language switch failed:', e);
    }
  };
  const currentLang = mounted ? languagesListMock.find(lang => normalizeLocale(lang.locale) === currentLocale) : null;
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Button aria-label="Like" isIconOnly onPress={onOpen} variant={'solid'} color="default" size={'md'}>
          {currentLang ? <Flag width={30} height={30} src={currentLang.link} alt={currentLang.alt} /> : <PlanetIcon />}
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={'5xl'}>
          <ModalContent>
            {onClose => (
              <>
                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                <ModalBody>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, 1fr)',
                      gap: '8px',
                    }}
                  >
                    {languagesListMock.map(({ title, alt, link, locale }, i) => (
                      <Button
                        key={i}
                        size="md"
                        variant={normalizeLocale(currentLocale) === normalizeLocale(locale) ? 'solid' : 'flat'}
                        color={normalizeLocale(currentLocale) === normalizeLocale(locale) ? 'primary' : 'default'}
                        onPress={() => {
                          handleLanguageChange(locale);
                          onClose();
                        }}
                        endContent={<Flag width={30} height={30} src={link} alt={alt} />}
                      >
                        {title}
                      </Button>
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="default" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Suspense>
    </>
  );
};
