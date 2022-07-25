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
// import { сontactApi } from './myContactsSlice';
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
  // contacts: сontactApi.reducer,
  filter: myFilterSlice,
  register: authSlice,
});

const persistConfig = {
  key: 'auth',
  storage,
  // blacklist: ['filter'],
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: {
  //   auth: persistReducer(persistConfig, rootReducer),
  //   // filter: myFilterSlice,
  // },
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
