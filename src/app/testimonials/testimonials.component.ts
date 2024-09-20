import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
    testimoni=[
        {
          id: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere culpa expedita, ratione saepe rem labore distinctio provident necessitatibus, incidunt, dignissimos magnam eaque inventore mollitia. Recusandae distinctio laudantium nam voluptate.",
          customer: "Customer 1"
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere culpa expedita, ratione saepe rem labore distinctio provident necessitatibus, incidunt, dignissimos magnam eaque inventore mollitia. Recusandae distinctio laudantium nam voluptate.",
          customer: "Customer 2"
        }
    ]

    filteredTestimoni = this.testimoni.filter(item => item.id === 1);

}
