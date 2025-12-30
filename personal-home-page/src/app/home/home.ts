import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  public profileData: any = signal({
    name: 'Gabriel Sousa',
    role: 'Software Engineer | AI & Infrastructure',
    location: 'Brasília, Brazil'
  });

  public services: any = signal([
    { title: 'AI & Inference', desc: 'Triton, CUDA, Python' },
    { title: 'Backend & Core', desc: 'Java, C++, Spring' },
    { title: 'Infrastructure', desc: 'Kubernetes, AWS, GCP' }
  ]);
}
