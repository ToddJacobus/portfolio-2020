export default (state = null, action) => {
    switch (action.type) {
        case "GET_CODE_BLOCKS":
            if (action.payload.total > 0) {
                return {
                    items: [
                        ...action.payload.items.map(item => {
                            return {
                                id: item.sys.id,
                                title: item.fields.title,
                                codeBlock: item.fields.codeBlock,
                            }
                        })
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