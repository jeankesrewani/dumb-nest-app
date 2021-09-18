import { Controller, Get, Param } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAll(): string[] {
    return this.songsService.findAll();
  }

  @Get(':id')
  findNameById(@Param() params): string {
    return this.songsService.findNameById(params.id);
  }
}
