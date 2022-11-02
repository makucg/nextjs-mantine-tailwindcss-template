import React, { useEffect, useState } from 'react';

import { Navbar, INavbarProps } from './navbar.component';

type Props = {
	children: React.ReactNode;
	navbar?: INavbarProps;
};

export const Layout = (props: Props) => {
	const { children, navbar } = props;
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);
	if (!hasMounted) {
		return null;
	}

	return (
		<>
			<Navbar {...navbar} />
			<main>{children}</main>
		</>
	);
};
