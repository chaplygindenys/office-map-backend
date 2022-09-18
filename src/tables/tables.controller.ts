import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { TablesService } from './tables.servise';

@Controller('tables')
export class TablesController {
  constructor(private tablesService: TablesService) {}

  @Get(':id')
  async getAllTables(@Param() params): Promise<any> {
    const { id } = params;
    return this.tablesService.getTableById(id);
  }
}
