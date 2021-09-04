import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';

interface SidebarDrawerContextProps {
  children: ReactNode;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

type SidebarDrawerContextData = UseDisclosureReturn;

export function SidebarDrawerProvider({ children }: SidebarDrawerContextProps) {
  const disclosure = useDisclosure();

  const router = useRouter();

  // To close modal every time we go to other page
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
