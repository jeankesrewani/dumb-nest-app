import { Injectable } from '@nestjs/common';
import Song from './song.interface';

@Injectable()
export class SongsService {
  private readonly songs: Song[] = [
    { id: 1, name: 'run to the hills' },
    { id: 2, name: 'hallowed be thy name' },
  ];

  findAll(): string[] {
    return this.songs.map((songObj: Song) => songObj.name);
  }

  findNameById(id: number): string {
    return this.songs.filter((songObj: Song) => songObj.id == id)[0]?.name;
  }
}
