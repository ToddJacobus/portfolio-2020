export default (state = null, action) => {
    switch (action.type) {
        case "GET_PROJECT_POSTS":
            if (action.payload.total > 0) {
                return {
                    items: [
                        ...action.payload.items.map(item => {
                            return {
                                id: item.sys.id,
                                title: item.fields.title,
                                objectives: item.fields.objectives,
                                techStack: item.fields.techStack,
                                body: item.fields.body,
                                order: item.fields.order,
                                heroImage: action.payload.includes && item.fields.heroImage ?
                                    action.payload.includes.Asset.find(
                                        asset => asset.sys.id === item.fields.heroImage.sys.id
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