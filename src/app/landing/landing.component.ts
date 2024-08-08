import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  benefitsList: {img: string, caption: string}[] = [
    {img: './assets/images/rich-lrg.png', caption: '95:5 Revenue split'},
    {img: './assets/images/sunglasses-lrg.png', caption: '24/7 Live Chat Support'},
    {img: './assets/images/wink-lrg.png', caption: 'No Ad Interruptions'},
    {img: './assets/images/kiss-lrg.png', caption: 'Fair moderation'}
  ]

  testimonialData: Testimonial[] = [
    {img: './assets/images/thonggdelonge.webp', name: 'Thonggdelonge', followers: 4845, message: `Just a couple months into streaming, the 95:5 sub split allowed me to pay my bills while also embracing my true passions. If you're still grinding on Twitch, you're missing out on something big.`},
    {img: './assets/images/pandaskills.webp', name: 'Pandaskills', followers: 7722, message: `Kick's algorithm allows new streamers to gain viewers and followers much quicker than on any other platform.`},
    {img: './assets/images/igypc.webp', name: 'iGypC', followers: 11945, message: `When I was on Twitch, I wasn't generating enough income to support my family and me. But after streaming on Kick for just 8 months, I'm now a full time content creator because of their 95:5 split.`},
    {img: './assets/images/theleaway.webp', name: 'Theleaway', followers: 8202, message: `I juggled a full time job and streamed on Twitch just to keep things going. But on Kick, the payouts are unmatched. In the last 5 months, everything has changed for me. I'm now a partnered fitness streamer.`},
    {img: './assets/images/samscope.webp', name: 'SamScope', followers: 760, message: `Kick made this happen. This platform gave me a new life. And I hope other streamers experience this too. I hope other streamers realise they need to come to Kick.`},
    {img: './assets/images/darkalpha_xdi.webp', name: 'DarkAlpha_xDi', followers: 973, message: `Even though I just hit partner on Twitch, there aren't that many benefits other than a purple checkmark. I think Kick is a great opportunity to reach new viewers and build a community in a fresh, exciting way. Seems perfect for both new and experienced streamers.`},
  ]

  faqQuestions: FaqQuestion[] = [
    {caption: 'Why join Kick if I already stream elsewhere?', message: `Simulcasting on Kick as well as other major streaming platforms offers the opportunity to double or even triple your earnings from streaming. In addition to a 95:5 revenue split in favour of the streamer, no ads during streams, and 24/7 live support, why wouldn't you want to earn more for your hard work?`},
    {caption: 'What streaming software is Kick compatible with?', message: `Kick is compatible with popular streaming software like OBS Studio and Streamlabs.`},
    {caption: 'How do I start a stream', message: `You need to get your stream key from Kick and configure it in your streaming software.`},
    {caption: 'What URL will my stream be hosted at', message: `Your stream URL will be kick.com/[your handle] eg: https://kick.com/tfue`},
    {caption: 'How does advertising work in-stream?', message: `We don't run ads in-stream, for any streamers. We were sick of watching streams being interrupted by ads, so we don't do that here.`},
    {caption: 'Can I record streams to watch or stream later', message: `Yep, streamers can record their streams for later viewing.`}
  ]
}

export interface Testimonial {
  img: string,
  name: string,
  followers: number,
  message: string
}

export interface FaqQuestion {
  caption: string;
  message: string;
}
