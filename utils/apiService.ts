import axios from "axios";
import { API_GITHUB } from "./config";

export class APIService {

  static async getUsers() {
    try {
      const users = await axios.get(`${API_GITHUB}/users`);
      return users.data;
    } catch (err) {
      console.error('getUsers error', err);
    }
  }

  static async getUserByName(name: string | string[]) {
    try {
      const user = await axios.get(`${API_GITHUB}/users/${name}`)
      return user.data;
    } catch (err) {
      console.error('getUserByName error', err);
    }
  }

  static async getUserRepo(name: string | string[], repoName: string) {
    try {
      const repo = await axios.get(`${API_GITHUB}/repos/${name}/${repoName}`)
      return repo.data;
    } catch (err) {
      console.error('getUserRepo error', err);
    }
  }

  static async getUserAllRepos(name: string | string[]) {
    try {
      const repos = await axios.get(`${API_GITHUB}/users/${name}/repos`);
      return repos.data;
    } catch (err) {
      console.error('getUserAllRepos error', err);
    }
  }

}