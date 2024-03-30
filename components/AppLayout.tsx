import { ReactNode } from 'react';

const AppLayout = ({ children }: { children: ReactNode }) => {
	return <main>{children}</main>;
};

export default AppLayout;
