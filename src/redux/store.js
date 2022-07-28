import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import myFilterSlice from './myFilterSlice';
import { сontactApi } from './myContactsSlice';
// import registerSlice from './registerSlice';
import authSlice from '././auth/authSlice';
// import { registerApi } from './auth/registerSlice';

// export const store = configureStore({
//   reducer: {
//     [сontactApi.reducerPath]: сontactApi.reducer,
//     // [registerApi.reducerPath]: registerApi.reducer,
//     register: registerSlice,

//     filter: myFilterSlice,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     сontactApi.middleware,
//     // registerApi.middleware,
//   ],
// });

const rootReducer = combineReducers({
  [сontactApi.reducerPath]: сontactApi.reducer,
  // [authSlice.reducerPath]: authSlice.register,
  filter: myFilterSlice,
  auth: authSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    сontactApi.middleware,
  ],

  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware(),
  //   сontactApi.middleware,
  //   //     // registerApi.middleware,
  // ],
});

export const persistor = persistStore(store);
