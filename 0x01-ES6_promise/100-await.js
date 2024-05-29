import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const newObj = {};
  try {
    newObj.photo = await uploadPhoto();
    newObj.user = await createUser();
  } catch (error) {
    newObj.photo = null;
    newObj.user = null;
  }
  return newObj;
}
