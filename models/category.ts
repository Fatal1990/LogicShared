import {Type} from "class-transformer";
import {ILocaleableValue, Jsonable} from "@/_shared/models/tools/tools";
import {LocaleableValue} from "@/_shared/services/translate.service";
import {routeHelper, RouteName} from "@shared/helpers/route.helper";
import {ROUTE_NAMES} from "@/router/enum/names.enum";

interface IBaseCategory {
	id: string;
	slug: LocaleableValue;
	name: LocaleableValue;
}

export class Category extends Jsonable<Category>() implements IBaseCategory {
	id: string;

	@ILocaleableValue() slug: LocaleableValue;
	@ILocaleableValue() name: LocaleableValue;

	productsCount: number;

	@Type(() => Category)
	children: Category[];

	get VueLink() {
		return {
			name: routeHelper.names['product-catalog'],
			params: {
				[routeHelper.params.slug]: this.slug
			}
		}
	}
}

export class ProductCategory extends Jsonable<ProductCategory>() implements IBaseCategory {
	id: string;

	@ILocaleableValue() slug: LocaleableValue;
	@ILocaleableValue() name: LocaleableValue;
}
