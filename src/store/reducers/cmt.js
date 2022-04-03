import { comments } from "../../utils/constants";

const initialState = {
    comment: comments,
};

const cmt = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return {
                ...state,
                comment: action.comment,
            };
        default: // need this for default case
            return state;
    }
};

export default cmt;
