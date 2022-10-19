import { Get, Post, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
  ) {}

  @Post()
  create(createTweetDto: CreateTweetDto) {
    return this.tweetModel.create(createTweetDto as any);
  }

  @Get()
  findAll() {
    return this.tweetModel.findAll();
  }

  @Get()
  findOne(id: number) {
    return this.tweetModel.findOne({ having: { id: id } });
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
