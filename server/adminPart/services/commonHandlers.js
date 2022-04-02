class CommonHandlers {
  withIdField(items) {
    if (Array.isArray(items)) {
      const itemsList = items.map(i => ({
        id: i._id,
        ...i._doc,
      }))

      return itemsList
    }
    else {
      const itemsList = {id: items._id, ...items._doc}

      return itemsList;
    }
     // for(let item in items) {
     //   if (Array.isArray(i)) {
     //
     //   }
     //   return Object.keys(item).map(i => {
     //      return i === '_id' ? item[i] : i;
     //   })
     // }
    //  const itemsList = items.map(item => {
    //    Object.keys(item).map(i => {
    //      if (Array.isArray(i)) {
    //        Object.keys(i).map(j => {
    //          if (j === '_id') i['id'] = i[j];
    //        })
    //      }
    //      if (i === '_id') item['id'] = item[i];
    //    })
    //  })
    //  return itemsList;
  }

  handleFilter(filter) {
    let match = {};
    if (filter) {
      Object.keys(filter).forEach(item => {
        if (item === 'id') return match['_id'] = filter[item]
        if (item === 'q') {
          const params = filter['q'].split(' ')

          if(!!params[0]) match['firstName'] = {$regex: params[0], $options: 'i'}
          if(!!params[1]) match['lastName'] = {$regex: params[1], $options: 'i'}
          if(!!params[2]) match['phoneNumber'] = {$regex: params[2]};

          return match;
        }
        match[item] = filter[item]
      })
    }

    return match;
  }

  handleSort(sort) {
    let sortBy = {};
    if(sort){
      sortBy[sort[0]] = sort[1] === 'DESC' ? -1 : 1;
    }
    return sortBy;
  }

  handlePagination(range) {
    let skip, lim;
    if (range) {
      skip = range[0];
      lim = range[1] - range[0] + 1;
    }

    return {skip, lim}
  }
}

module.exports = new CommonHandlers();