import {TipoDocumentoController} from "./controllers/TipoDocumentoController"

const TipoDocumentoRoutes = [
    {
        method: "get",
        route: "/tiposDocumentos",
        controller: TipoDocumentoController,
        action: "all"
    },
    {
        method: "get",
        route: "/tiposDocumentos/:id",
        controller: TipoDocumentoController,
        action: "one"
    },
    {
        method: "post",
        route: "/tiposDocumentos",
        controller: TipoDocumentoController,
        action: "save"
    },
    {
        method: "delete",
        route: "/tiposDocumentos/:id",
        controller: TipoDocumentoController,
        action: "remove"
    },
    {
        method: "put",
        route: "/tiposDocumentos/:id",
        controller: TipoDocumentoController,
        action: "update"
    }
]

export const Routes = [
    ...TipoDocumentoRoutes
]