import type {HydratedDocument, Types} from 'mongoose';
import type {Like} from './model';
import LikeModel from './model';

let ObjectID = require('mongodb').ObjectID;

/**
 * This files contains a class that has the functionality to explore freets
 * stored in MongoDB, including adding, finding, updating, and deleting freets.
 * Feel free to add additional operations in this file.
 *
 * Note: HydratedDocument<Freet> is the output of the FreetModel() constructor,
 * and contains all the information in Freet. https://mongoosejs.com/docs/typescript.html
 */
class LikeCollection {
  /**
   * Add a freet to the collection
   *
   * @param {string} authorId - The id of the author of the freet
   * @param {string} freetId - The id of the content of the freet
   * @return {Promise<HydratedDocument<Freet>>} - The newly created freet
   */
  static async addOne(authorId: Types.ObjectId | string, freetId: Types.ObjectId | string): Promise<HydratedDocument<Like>> {
    const like = new LikeModel({
      authorId,
      freetId
    });
    await like.save(); // Saves freet to MongoDB
    return like.populate(['authorId', 'freetId']);
  }

  /**
   * Find a freet by freetId and userId
   *
   * @param {string} authorId - The id of the author to find
   * @param {string} freetId - The id of the freet to find
   *
   * @return {Promise<HydratedDocument<Freet>> | Promise<null> } - The freet with the given freetId, if any
   */
  static async findOne(authorId: Types.ObjectId | string, freetId: Types.ObjectId | string): Promise<HydratedDocument<Like>> {
    return LikeModel.findOne({authorId, freetId}).populate(['userId', 'freetId']);
  }

  /**
   * Get all the freets in by given author
   *
   * @param {string} freetId - the freetId that we want to find likes for
   * @return {Promise<HydratedDocument<Freet>[]>} - An array of all of the freets
   */
  static async findAllLikesByFreetId(freetId: Types.ObjectId | string): Promise<Array<HydratedDocument<Like>>> {
    return LikeModel.find({freetId}).populate('freetId');
  }

  /**
   * Delete a like with given userId and freetId.
   *
   * @param {string} userId - The freetId of freet to delete
   * @param {string} freetId - The freetId of freet to delete
   * @return {Promise<Boolean>} - true if the freet has been deleted, false otherwise
   */
  static async deleteOne(userId: Types.ObjectId | string, freetId: Types.ObjectId | string): Promise<boolean> {
    const like = await LikeModel.deleteOne({userId, freetId});
    return like !== null;
  }
}

export default LikeCollection;
