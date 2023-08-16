import { createSlice, type EntityId, type PayloadAction, type Update } from '@reduxjs/toolkit';

import { uploadsAdapter } from './uploadsAdapter';

import type { IUploadItem, UploadsState } from './types';

const initialState = {
  data: uploadsAdapter.getInitialState(),
};

export const uploads = createSlice({
  name: 'uploads',
  initialState,
  reducers: {
    setAllUploads: (state: UploadsState, { payload }: PayloadAction<Array<IUploadItem>>) => {
      uploadsAdapter.setAll(state.data, payload);
    },

    addUpload: (state: UploadsState, { payload }: PayloadAction<IUploadItem>) => {
      uploadsAdapter.addOne(state.data, payload);
    },

    removeUpload: (state: UploadsState, { payload }: PayloadAction<EntityId>) => {
      uploadsAdapter.removeOne(state.data, payload);
    },

    updateUpload: (state: UploadsState, { payload }: PayloadAction<Update<IUploadItem>>) => {
      uploadsAdapter.updateOne(state.data, payload);
    },
  },
});

export const { setAllUploads, addUpload, removeUpload, updateUpload } = uploads.actions;
