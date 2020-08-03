export default (state = null, action) => {
    switch (action.type) {
        case "GET_SERVICES":
            if (action.payload.total > 0) {
                return {
                    items: [
                        ...action.payload.items.map( item => {
                            return {
                                id: item.sys.id,
                                tagline: item.fields.tagline,
                                description: item.fields.description,
                                order: item.fields.order,
                                image: action.payload.includes && item.fields.image ?
                                    action.payload.includes.Asset.find(
                                        asset => asset.sys.id === item.fields.image.sys.id
                                    ).fields.file.url
                                    : undefined
                            }
                        }).sort((a, b) => a.order - b.order)
                    ],
                    linkedAssets: action.payload.includes ? action.payload.includes.Asset : [],
                    total: action.payload.total,
                }
            } else {
                return action.payload
            }

        default:
            return state
    }
}