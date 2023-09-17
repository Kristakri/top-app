import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interface";
import { withLayout } from "../../layout/Layout";
import { API } from "../../helpers/api";

function Cources({menu, firstCategory}: CourcesProps): JSX.Element {
  return (
    <div>
      Курсы
    </div>
  );
}

export default withLayout(Cources);

export const getStaticProps: GetStaticProps<CourcesProps> = async () => {
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

interface CourcesProps extends Record<string, unknown>{
	menu: MenuItem[],
	firstCategory: number
}