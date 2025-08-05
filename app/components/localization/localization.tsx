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
import { PlanetIcon } from '@/app/components/icon/icons';
import { useRouter } from 'next/navigation';
import { languagesListMock } from '@/mock/languages-list.mock';

export const Localization: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [currentLangCode, setCurrentLangCode] = useState('en');

  useEffect(() => {
    const readLang = () => {
      const match = document.cookie.match(/(^|;) ?lang=([^;]+)/);
      const lang = match?.[2] || 'en';
      setCurrentLangCode(lang);
    };

    readLang();

    const interval = setInterval(readLang, 500); // следим за изменениями куки
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (locale: string) => {
    document.cookie = `lang=${locale}; path=/; max-age=31536000`; // ставим куки на год
    setCurrentLangCode(locale);
    onOpenChange();
    router.refresh();
  };

  const currentLang = mounted ? languagesListMock.find(lang => lang.locale === currentLangCode) : null;

  return (
    <Suspense fallback={<Skeleton />}>
      <Button aria-label="Change language" isIconOnly onPress={onOpen} variant="solid" color="default" size="md">
        {currentLang ? <Flag width={30} height={30} src={currentLang.link} alt={currentLang.alt} /> : <PlanetIcon />}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader />
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
                      variant={currentLangCode === locale ? 'solid' : 'flat'}
                      color={currentLangCode === locale ? 'primary' : 'default'}
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
  );
};
