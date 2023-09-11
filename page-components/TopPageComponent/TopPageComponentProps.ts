import { TopLevelCategory, TopPageModel } from "../../interfaces/page.intarface";
import { ProductModel } from "../../interfaces/product.intarface";

export interface TopPageComponentProps extends Record<string, unknown> {
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}