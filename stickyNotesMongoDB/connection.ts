import { connect } from 'mongoose';
import { CONNECTION_LINK } from './constants';

export const startDb = async()=> {
  try {
    await connect(`${CONNECTION_LINK}`);
  } catch (err) {
    console.log(err);
  }
}