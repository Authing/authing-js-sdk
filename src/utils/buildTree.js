import _ from 'lodash'
export default function buildTree(nodes) {
  /* nodes structure
  [
    {"_id": "1", "children": ["2"], "root": true}, 
    {"_id": "2", "children": ["3", "4"], "root": false},
    {"_id": "3", "children": [], "root": false},
    {"_id": "4", "children": [], "root": false},
  ]

  转换成 -> 
  {
    _id: 1,
    children: [
      {
        _id: 2,
        children: [
          {
            _id: 3,
            children: []
          },
          {
            _id: 4,
            children: []
          }
        ]
      }
    ]
  }
  */
  const rootNodes = [_.find(nodes, { root: true })]
  const mapChildren = childId => {
    const node = _.find(nodes, node => node._id === childId) || null;
    if (_.isArray(node.children) && node.children.length > 0) {
      node.children = node.children.map(mapChildren).filter(node => node !== null);
    }
    return node
  }
  const tree = rootNodes.map(node => {
    node.children = node.children.map(mapChildren).filter(node => node !== null);
    return node;
  });
  return tree[0]
}