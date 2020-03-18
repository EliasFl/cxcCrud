import {TipoDocumentoController} from "./controllers/TipoDocumentoController"
import {ClienteController} from "./controllers/ClienteController"

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

const ClienteRoutes = [
    {
        method: "get",
        route: "/clientes",
        controller: ClienteController,
        action: "all"
    },
    {
        method: "get",
        route: "/clientes/:id",
        controller: ClienteController,
        action: "one"
    },
    {
        method: "post",
        route: "/clientes",
        controller: ClienteController,
        action: "save"
    },
    {
        method: "delete",
        route: "/clientes/:id",
        controller: ClienteController,
        action: "remove"
    },
    {
        method: "put",
        route: "/clientes/:id",
        controller: ClienteController,
        action: "update"
    }
]

export const Routes = [
    ...TipoDocumentoRoutes,
    ...ClienteRoutes
]