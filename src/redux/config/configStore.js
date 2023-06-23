import { combineReducers, createStore } from "redux";
import storage from "redux-persist/lib/storage";

// 모듈과 스토어 연결
import { persistReducer, persistStore } from "redux-persist";
import todo from "../modules/todo";

const persistConfig = {
  key: "todo",
  storage,
};

const rootReducer = combineReducers({
  todo: todo,
});

const enhancedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(enhancedReducer);
const persistor = persistStore(store);

export { persistor, store };
export default store;
