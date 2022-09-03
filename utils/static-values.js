export const PRODUCTS_STATUS = [
    {
        key: 0,
        value: 'Desactivados',
        badgeColor: 'danger'
    },
    {
        key: 1,
        value: 'Activados',
        badgeColor: 'success'
    }
]

export const getProductStatus = (key) => {
    return PRODUCTS_STATUS.find(item => item.key === key)
}

export const PRODUCTS_FAVORITES_STATUS = [
    {
        key: 0,
        value: 'No destacado',
        badgeColor: 'danger'
    },
    {
        key: 1,
        value: 'Destacado',
        badgeColor: 'success'
    }
]

export const getProductFavoritesStatus = (key) => {
    return PRODUCTS_FAVORITES_STATUS.find(item => item.key === key)
}

// Especifica las opciones para obtener cantidad de items en tablas
export const PAGINATE_ITEMS = [5, 10, 15, 25, 50]

export const ORDER_STATUS = [
    { key: 1, value: "PEDIDO REALIZADO", color: 'secondary' },
    { key: 2, value: "PAGO APROBADO", color: 'info' },
    { key: 3, value: "PEDIDO ANULADO", color: 'danger' },
    { key: 4, value: "PEDIDO EN TRANSITO", color: 'warning' },
    { key: 5, value: "PEDIDO ENTREGADO", color: 'success' }
]

export const getOrderStatus = (key) => {
    return ORDER_STATUS.find(item => item.key === key)
}

export const SHIPPING_TYPE = [
    { key: 1, value: "Envío express" },
    { key: 2, value: "Encomienda (Provincias)" },
    { key: 3, value: "Gratuito" }
]

export const getShippingStatus = (key) => {
    return SHIPPING_TYPE.find(item => item.key === key)
}

export const TYPE_OF_SALE = [
    {
        key: 1,
        value: 'Boleta'
    },
    {
        key: 2,
        value: 'Factura'
    },
    {
        key: 3,
        value: 'Proforma'
    }
]

export const getTypeOfSale = (key) => {
    return TYPE_OF_SALE.find(item => item.key === key)
}

const PAYMENT_TYPES = [
    {
        key: 1,
        value: 'Transferencia bancaria'
    },
    {
        key: 2,
        value: 'Efectivo móvil'
    },
    {
        key: 3,
        value: 'Culqi - Tarjeta Débito/Crédito'
    }
]

export const getPaymentType = (key) => {
    return PAYMENT_TYPES.find(item => item.key === key)
}

const URL_BANNER_TYPES = [
    {
        key: 0,
        value: 'Enlace externo'
    },
    {
        key: 1,
        value: 'Enlace interno'
    }
]

export const getUrlBannerType = (key) => {
    return URL_BANNER_TYPES.find(item => item.key === key)
}

export const priceFormat = (value) => {
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

    const formatter = new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN',
        useGrouping: true
    })

    let result = formatter.format(value)

    return result

}

export const LINK_TYPE_BANNER = [
    {
        value: null,
        text: 'Seleccione tipo de enlace'
    },
    {
        value: 0,
        text: 'Enlace externo'
    },
    {
        value: 1,
        text: 'Enlace interno'
    }
]

export const LOGIN_ERRORS = [
    {
        key: 'CONTRASEÑA_INCORRECTA',
        text: 'La contraseña es incorrecta por favor vuelva a intentarlo.'
    },
    {
        key: 'NO_EXISTE',
        text: 'El correo ingresado no está registrado.'
    }
]

export const getLoginError = (key) => {
    return LOGIN_ERRORS.find(item => item.key === key)
}

export const PRODUCT_STATUS = [
    {
        value: null,
        text: 'Seleccione tipo de producto'
    },
    {
        value: 0,
        text: 'No destacado'
    },
    {
        value: 1,
        text: 'Destacado'
    }
]