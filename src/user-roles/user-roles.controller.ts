import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/roles/roles.guard';
import { Roles } from '../guards/roles/roles.decorator';
import { Role } from '../guards/roles/roles.enums';

@Controller('user-roles')
export class UserRolesController {
  @Get('admin-data')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  getAdminData() {
    return { message: 'Only admin can access this data.' };
  }

  @Get('user-data')
  getUserData() {
    return { message: 'Any user can access this data.' };
  }
}
