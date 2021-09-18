import { Injectable } from '@nestjs/common';
import SongInterface from './song.interface';

@Injectable()
export class SongsService {
  private readonly songs: SongInterface[] = [
    { id: 1, name: 'run to the hills' },
    { id: 2, name: 'hallowed be thy name' },
  ];

  findAll(): string[] {
    return this.songs.map((songObj: SongInterface) => songObj.name);
  }

  findNameById(id: number): string {
    return this.songs.filter((songObj: SongInterface) => songObj.id == id)[0]
      ?.name;
  }
}
