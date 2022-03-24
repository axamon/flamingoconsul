import React, { Component } from 'react'

export default class CoreValues extends Component {
  render() {
    return (
        <div>
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p><b>Results</b>: We deliver results that meet our clients' expectations in the most efficient and effective way possible.</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p><b>Honesty</b>: The trust of our clients is very important to us, thus, we deliver on our promises.</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p><b>Creativity</b>: We think outside of the box. We are constantly developing new ways of solving different regulatory compliance related issues.</p>
                </li>
            </ul>
        </div>
    )
  }
}
