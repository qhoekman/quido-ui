import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarDirective } from './avatar.directive';
import { AvatarImageDirective } from './avatar-image.directive';
import { AvatarFallbackDirective } from './avatar-fallback.directive';

@NgModule({
  declarations: [
    AvatarDirective,
    AvatarImageDirective,
    AvatarFallbackDirective,
  ],
  imports: [CommonModule],
  exports: [AvatarDirective, AvatarImageDirective, AvatarFallbackDirective],
})
export class AvatarModule {}
