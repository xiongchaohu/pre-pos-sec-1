function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  	var temp=[];
	for(var i=0;i<collection_a.length;i++)
	{

		if(collection_b.indexOf(collection_a[i])!=-1)
		{
			temp.push(collection_a[i]);
		}
			
	}
	return temp;
		
}

module.exports = collect_same_elements;
