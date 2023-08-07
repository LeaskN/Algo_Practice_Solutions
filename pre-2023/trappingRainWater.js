var trap = function(height) {
  //set highest left equal to the first element
  let left = height[0];
  // set the volume of water captured to zero
  let volume = 0;
  
  //loop over all elements, starting at second element
  for(let i = 1; i < height.length; i++){
      // our current element is the 'middle', we set 'middle' to that height
      let middle = height[i];
      // set the right bounds to zero, we will re-calculate this every loop (could probably be re-factored)
      let right = 0;
      
      // if the element to the left is greater than our current left bound, set it as the left bound
      if (height[i-1] > left){
          left = height[i-1];
      }
      
      // loop over the remainder of the array and see if there is anything larger to the right
      for(let j = i; j < height.length; j++){
          // if the element to the right is greater than our current right bound, set it as the right bound
          if ( height[j] > right){
              right = height[j];
          } 
      }
      // if the left and right are greater than the middle 
      if (left > middle && right > middle){
      // the left and right bounds are greater than the middle
      // add the difference between the smaller and the middle together
          volume += left > right ? right - middle : left - middle;
      }
      
  }
  
  // return the total volume!
  return volume;
};