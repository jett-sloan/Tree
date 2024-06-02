/** TreeNode: node for a general tree. */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const newNode = new TreeNode(value);
    this.children.push(newNode);
    return newNode;
  }

  // Recursively sum up all values in the tree
  sumValues() {
    let sum = this.value;
    this.children.forEach(child => {
      console.log(this.value,this.next)
      sum += child.sumValues();
    });
    return sum;
  }
  addChild(child) {
    this.children.push(child);
  }
  countEvens() {
    let count = this.val % 2 === 0 ? 1 : 0;
    this.children.forEach(child =>{
      count += child.countEvens()
    })
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
let isGreater = this.value > lowerBound ? 1 : 0 
this.children.forEach(child =>{
  isGreater += child.isGreater(lowerBound)
})
return isGreater
  }
}




  /** countEvens(): count all of the nodes in the tree with even values. */


  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

// Create the root node

