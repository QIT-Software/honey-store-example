import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import CatalogsApi from "../../api/catalogs";
import { LoadStatuses } from "@/enums/LoadStatuses";
import { Catalog } from "@/types/Catalogs";

@Module({
  namespaced: true,
})
export default class CatalogsModule extends VuexModule {
  public catalogs: Catalog[] = [];
  public catalog: Catalog = null;

  public catalogsLoadStatus: LoadStatuses = null;
  public catalogLoadStatus: LoadStatuses = null;

  @Action
  public fetchCatalogs(): Promise<void> {
    this.context.commit("setCatalogsLoadStatus", LoadStatuses.FETCHING);

    return CatalogsApi.getCatalogs()
      .then(({ data }) => {
        this.context.commit("setCatalogs", data);
        this.context.commit("setCatalogsLoadStatus", LoadStatuses.LOADED);
      })
      .catch(() => {
        this.context.commit("setCatalogsLoadStatus", LoadStatuses.FAILED);
      });
  }

  @Action
  public fetchCatalog(slug: string): Promise<void> {
    this.context.commit("setCatalogLoadStatus", LoadStatuses.FETCHING);

    return CatalogsApi.getCatalogBySlug(slug)
      .then(({ data }) => {
        this.context.commit("setCatalog", data);
        this.context.commit("setCatalogLoadStatus", LoadStatuses.LOADED);
      })
      .catch(() => {
        this.context.commit("setCatalogLoadStatus", LoadStatuses.FAILED);
      });
  }

  @Mutation
  public setCatalogs(catalogs: Catalog[]): void {
    this.catalogs = catalogs;
  }

  @Mutation
  public setCatalog(catalog: Catalog): void {
    this.catalog = catalog;
  }

  @Mutation
  public setCatalogsLoadStatus(value: LoadStatuses) {
    this.catalogsLoadStatus = value;
  }

  @Mutation
  public setCatalogLoadStatus(value: LoadStatuses) {
    this.catalogLoadStatus = value;
  }
}
