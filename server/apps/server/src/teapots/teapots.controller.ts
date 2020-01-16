import { Controller, Get } from '@nestjs/common';
import { TeapotsService } from './teapots.service';

@Controller('teapots')
export class TeapotsController {
	constructor(
		private teapotsService: TeapotsService
	) {

	}
	@Get('all')
	getTeapots() {
		return this.teapotsService.getTeapots()
	}
}
