import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const newArray = [];
  await signUpUser(firstName, lastName).then((user) => (
    newArray.push({ status: 'fulfilled', value: user })));
  await uploadPhoto(fileName).catch((error) => (
    newArray.push({ status: 'rejected', value: error.toString() })));
  return newArray;
}