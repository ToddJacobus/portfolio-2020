export default (state = null, action) => {
    switch (action.type) {
        case "GET_TESTIMONY":
            if (action.payload.total > 0) {
                return {
                    items: [
                        ...action.payload.items.map(item => {
                            return {
                                id: item.sys.id,
                                testimony: item.fields.testimony,
                                attribution: item.fields.attribution,
                                order: item.fields.order,
                            }
                        }).sort((a, b) => a.order - b.order)
                    ],
                    total: action.payload.total,
                }
            } else {
                return action.payload
            }
            
        default:
            return state
    }
}