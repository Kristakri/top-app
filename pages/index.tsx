import { useState } from "react";
import { H, P, Button, Tag, Rating, Input, Textarea } from "../components/components";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({menu, firstCategory}: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<H tag="h1">Header</H>
			<P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, mollitia.</P>
			<P size="small">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, mollitia.</P>
			<P size="large">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, mollitia.</P>
			<Button appearance="ghost" arrow="down">Button</Button>
			<Tag size="m" color="green" href="https://google.com">tag</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
			<Input />
			<Textarea />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	}
}

interface HomeProps extends Record<string, unknown>{
	menu: MenuItem[],
	firstCategory: number
}