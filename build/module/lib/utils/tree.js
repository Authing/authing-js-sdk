import _ from 'lodash';
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
    const rootNodes = [_.find(nodes, { root: true })];
    const mapChildren = (childId) => {
        const node = _.find(nodes, node => node._id === childId) || null;
        if (_.isArray(node.children) && node.children.length > 0) {
            node.children = node.children.map(mapChildren).filter((node) => node !== null);
        }
        return node;
    };
    const tree = rootNodes.map(node => {
        node.children = node.children.map(mapChildren).filter((node) => node !== null);
        return node;
    });
    return tree[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvdHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFdEIsTUFBTSxDQUFDLE9BQU8sVUFBVSxTQUFTLENBQUMsS0FBWTtJQUM1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BMkJFO0lBQ0YsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDakQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxPQUFZLEVBQUUsRUFBRTtRQUNuQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDckY7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUMsQ0FBQTtJQUNELE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNwRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDaEIsQ0FBQyJ9