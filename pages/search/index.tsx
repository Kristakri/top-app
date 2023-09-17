import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interface";
import { withLayout } from "../../layout/Layout";
import { API } from "../../helpers/api";

function Search({menu, firstCategory}: SearchProps): JSX.Element {
  return (
    <div>
      Поиск
    </div>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface SearchProps extends Record<string, unknown>{
	menu: MenuItem[],
	firstCategory: number
}